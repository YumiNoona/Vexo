$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$sdkRoot = Join-Path $env:LOCALAPPDATA 'Android\Sdk'
$androidProject = Join-Path $projectRoot 'src-tauri\gen\android'
$canonicalIcons = Join-Path $projectRoot 'src-tauri\icons\android'
$generatedResources = Join-Path $androidProject 'app\src\main\res'
$unsignedApk = Join-Path $androidProject 'app\build\outputs\apk\universal\release\app-universal-release-unsigned.apk'
$outputApk = Join-Path $projectRoot 'Vexo-android-test.apk'
$debugKey = Join-Path $env:USERPROFILE '.android\debug.keystore'

if (-not (Test-Path $sdkRoot)) { throw "Android SDK not found at $sdkRoot" }
$env:ANDROID_HOME = $sdkRoot
$env:ANDROID_SDK_ROOT = $sdkRoot

Set-Location $projectRoot
if (-not (Test-Path $androidProject)) {
  npm run android:init
  if ($LASTEXITCODE -ne 0) { throw 'Android initialization failed' }
}

# Generate every desktop/mobile icon from the web favicon and copy the Android
# variants into the already-initialized Gradle project.
npm run tauri -- icon favicon.ico
if ($LASTEXITCODE -ne 0) { throw 'Icon generation failed' }
Copy-Item -Path "$canonicalIcons\*" -Destination $generatedResources -Recurse -Force

npm run android:build:phone
if ($LASTEXITCODE -ne 0) { throw 'Android release build failed' }
if (-not (Test-Path $unsignedApk)) { throw "Unsigned APK not found at $unsignedApk" }

$buildTools = Get-ChildItem (Join-Path $sdkRoot 'build-tools') -Directory |
  Sort-Object Name -Descending | Select-Object -First 1
$zipalign = Join-Path $buildTools.FullName 'zipalign.exe'
$apksigner = Join-Path $buildTools.FullName 'apksigner.bat'

if (-not (Test-Path $debugKey)) { throw "Android debug keystore not found at $debugKey" }
& $zipalign -f 4 $unsignedApk $outputApk
if ($LASTEXITCODE -ne 0) { throw 'zipalign failed' }
& $apksigner sign --ks $debugKey --ks-key-alias androiddebugkey `
  --ks-pass pass:android --key-pass pass:android $outputApk
if ($LASTEXITCODE -ne 0) { throw 'APK signing failed' }
& $apksigner verify --verbose $outputApk
if ($LASTEXITCODE -ne 0) { throw 'APK signature verification failed' }

$result = Get-Item $outputApk
$hash = Get-FileHash $outputApk -Algorithm SHA256
Write-Host "APK: $($result.FullName)"
Write-Host "Size: $([math]::Round($result.Length / 1MB, 2)) MB"
Write-Host "SHA256: $($hash.Hash)"
