#!/usr/bin/env node

import { start } from '../src/index.js';

start().catch((err) => {
  console.error('[RC] Error:', err.message);
  process.exit(1);
});
