# Instrucciones para agentes — æ Studio

- æ Studio es el núcleo de MYaelMendez. Cada widget = contrato (`types.ts`) + superficie (`widget.tsx`) + README con su invariante.
- Primitiva Studio:
  - Estado vivo, no decorativo.
  - Separar lo informativo de lo ejecutable.
  - Exigir puertas de identidad y conexión.
  - Exponer supuestos, unidades, límites y verificación.
  - Acción acotada.
  - Distinguir draft, review, execution, commit, merge, deploy y publication.
  - Devolver evidencia al humano (`HUMAN://value`).
- Ningún estado en verde sin un recibo que lo midió.
- Nunca subir datos privados de personas.
- Many agents. One principal. Context may propagate; authority does not.
