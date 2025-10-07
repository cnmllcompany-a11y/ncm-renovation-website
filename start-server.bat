@echo off
echo Iniciando servidor de desarrollo para CNM Renovation...
echo.
echo Opciones disponibles:
echo 1. Servidor Node.js (recomendado)
echo 2. Servidor Python
echo 3. Abrir directamente en navegador
echo.
set /p choice="Selecciona una opción (1-3): "

if "%choice%"=="1" (
    echo.
    echo Instalando dependencias de Node.js...
    npm install
    echo.
    echo Iniciando servidor Node.js en http://localhost:3000
    npm start
) else if "%choice%"=="2" (
    echo.
    echo Iniciando servidor Python en http://localhost:8000
    python -m http.server 8000
) else if "%choice%"=="3" (
    echo.
    echo Abriendo index.html en el navegador...
    start index.html
) else (
    echo.
    echo Opción inválida. Abriendo index.html directamente...
    start index.html
)

pause

