use base64::{Engine as _, engine::general_purpose};
use tauri_plugin_dialog::DialogExt;

#[tauri::command]
async fn save_png_file(app: tauri::AppHandle, filename: String, data: String) -> Result<String, String> {
  let raw = if let Some(idx) = data.find(";base64,") {
    data.split_at(idx + 8).1.to_string()
  } else {
    data
  };

  let bytes = general_purpose::STANDARD.decode(&raw).map_err(|e| e.to_string())?;

  let (tx, rx) = std::sync::mpsc::channel();

  app.dialog().file()
    .add_filter("PNG Image", &["png"])
    .set_file_name(filename)
    .save_file(move |path| {
      let _ = tx.send(path);
    });

  let path = rx.recv()
    .map_err(|e| e.to_string())?
    .and_then(|fp| fp.into_path().ok())
    .ok_or_else(|| "Save cancelled".to_string())?;

  std::fs::write(&path, bytes).map_err(|e| e.to_string())?;
  Ok(path.to_string_lossy().to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_updater::Builder::new().build())
    .plugin(tauri_plugin_fs::init())
    .plugin(tauri_plugin_dialog::init())
    .invoke_handler(tauri::generate_handler![save_png_file])
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
