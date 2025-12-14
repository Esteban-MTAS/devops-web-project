# Manual de Operaciones

## 📜 Logs
- Se almacenan en la tabla `Logs` de SQL Server.
- Cada evento registra mensaje y fecha.

## 📈 Métricas básicas
- Número de requests al backend.
- Tiempo de respuesta promedio.
- Errores registrados.

## 🔔 Alertas simples
- Notificaciones vía correo/Slack cuando:
  - El backend se detiene.
  - La base de datos no responde.
  - Se superan umbrales de errores.

## 🛠️ Recuperación de fallos
1. Verificar contenedores con:
   ```bash
   docker ps