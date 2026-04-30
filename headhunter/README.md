# NEXO Headhunter RFQ

Agente cazador de RFQs para Grupo MICSA. Procesa un RFQ de texto, busca ficha técnica y proveedores en web, genera COT en Excel con margen del 30%, registra en la base de datos y entrega por Telegram.

## Uso

```bash
python3 headhunter_rfq.py "texto del RFQ"
# o via pipe
echo "RFQ busco valvula MAC 92A GDL urgente" | python3 headhunter_rfq.py
```

## Output

- `~/MICSA-Brain/RFQs/COTs/COT-MICSA-2026-NNNN.xlsx` — cotización individual
- `~/MICSA-Brain/RFQs/MICSA_RFQ_DATABASE.xlsx` — registro en hojas RFQs + COTs Generadas
- Mensaje Telegram con archivo adjunto

## Dependencias

```
openpyxl
httpx
beautifulsoup4
```

## Variables opcionales

Telegram no se guarda en el repo. Para enviar el archivo automáticamente:

```bash
export NEXO_TELEGRAM_TOKEN="token_del_bot"
export NEXO_TELEGRAM_CHAT_ID="chat_id_de_jordan"
```

Si no se configuran, el script genera COT y actualiza el Excel maestro sin enviar Telegram.

## Pipeline

1. Parse del RFQ — extrae producto, marca, modelo, cantidad, ubicación, urgencia
2. Web search — ficha técnica (DuckDuckGo HTML + Bing fallback)
3. Web search — proveedores y precio de referencia en USD
4. Genera COT Excel — fórmulas vivas, margen 30% no hardcoded
5. Append al Excel maestro (hojas RFQs y COTs Generadas)
6. Envía COT por Telegram a Jordan
