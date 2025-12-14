## 📄 `PIPELINE.md`
```markdown
# Documentación del Pipeline CI/CD

## ⚙️ Herramientas utilizadas
- **GitHub Actions**: integración continua.
- **Docker**: construcción y despliegue de contenedores.
- **Jest + Supertest**: pruebas automatizadas.

## 🔄 Flujo del pipeline
1. **Checkout del código** desde GitHub.
2. **Instalación de dependencias** Node.js.
3. **Ejecución de pruebas** unitarias e integración.
4. **Construcción de imagen Docker**.
5. **Push de la imagen a DockerHub**.
6. (Opcional) **Despliegue automático** en servidor remoto.

## 📂 Archivo principal
- `.github/workflows/ci-cd.yml`

## 📊 Beneficios
- Validación automática de cambios.
- Entrega continua sin intervención manual.
- Versionado y despliegue consistente.


