#!/usr/bin/env bash
set -euo pipefail

ENV="${1:-}"
if [[ -z "$ENV" ]]; then
  echo "Usage: ./scripts/deploy.sh --env=staging|production"
  exit 1
fi

case "$ENV" in
  --env=staging)
    echo "[deploy] Starting staging deploy..."
    # Placeholder: build, push image, apply manifests
    echo "[deploy] Build artifact"
    echo "[deploy] Run smoke tests"
    echo "[deploy] Done (staging)"
    ;;
  --env=production)
    echo "[deploy] Production deploy requires explicit human approval. Aborting."
    exit 2
    ;;
  *)
    echo "Invalid env flag. Use --env=staging or --env=production"
    exit 1
    ;;
esac
