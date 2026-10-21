@echo off
setlocal
cd /d "%~dp0"

set "NODE=C:\Users\Admin\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE%" set "NODE=node"

echo Starting "Yukiii - Rainy Night Konbini" on http://127.0.0.1:4173/
start "Yukiii - rainy night" /min "%NODE%" "%~dp0tools\serve.mjs"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173/"
endlocal
