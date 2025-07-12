@echo off
echo ================================
echo    ACTUALIZACION DE BLOG
echo ================================
echo.
echo Detectando cambios de WordPress...
echo Generando archivos actualizados...
echo.
npm run build
echo.
echo ================================
echo    BUILD COMPLETADO!
echo ================================
echo.
echo SIGUIENTE PASO:
echo 1. Ve a: https://hpanel.hostinger.com
echo 2. File Manager
echo 3. Arrastra la carpeta OUT
echo 4. Listo!
echo.
echo URL de Hostinger: https://hpanel.hostinger.com
echo.
pause