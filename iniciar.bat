@echo off
cd /d %~dp0
where python >nul 2>nul
if %errorlevel% neq 0 (
  echo No se encontro Python. Abre index.html directamente en el navegador.
  pause
  exit /b
)
start http://localhost:8080
python -m http.server 8080
