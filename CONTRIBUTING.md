# Contribuir a Cafetal OS

Gracias por ayudar a construir tecnología abierta para el sector café.

## Antes de comenzar

1. Revisa los issues y Discussions para evitar trabajo duplicado.
2. Explica la necesidad o problema antes de proponer una implementación grande.
3. Nunca incluyas datos reales de fincas, clientes, trabajadores o credenciales.
4. Mantén los cambios enfocados y documentados.

## Formas de contribuir

- Reportar errores reproducibles.
- Proponer mejoras de producto.
- Revisar términos y flujos desde la experiencia de campo.
- Mejorar accesibilidad, responsive y rendimiento.
- Escribir o corregir documentación.
- Crear pruebas.
- Traducir contenido.

## Flujo técnico

```bash
git clone https://github.com/nat-lab/cafetal-os.git
cd cafetal-os
npm ci
npm run dev
```

Crea una rama descriptiva:

```bash
git checkout -b feature/nombre-breve
git checkout -b fix/nombre-breve
```

Antes de abrir el pull request:

```bash
npm run check
```

## Pull requests

Un pull request debe incluir:

- Problema que resuelve.
- Alcance de los cambios.
- Pasos de validación.
- Capturas cuando modifique la interfaz.
- Riesgos o limitaciones conocidas.
- Issue relacionado cuando exista.

## Documentación

Todo comportamiento visible nuevo debe actualizar la documentación correspondiente. Los archivos se encuentran en `docs/` y se registran en `src/data/documentation.js`.

## Licencia de las contribuciones

Al enviar una contribución declaras que tienes derecho a compartirla y aceptas que se distribuya bajo la licencia MIT.
