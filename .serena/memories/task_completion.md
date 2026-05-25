# Task Completion

Before completing any changes or submitting commits:
1. **Lint Verification**: Run ESLint to ensure formatting passes: `npm run lint`.
2. **Build Success**: Verify compiling bundles build perfectly: `npm run build`.
3. **Locale check**: Verify all added strings have English and Vietnamese translation maps in `messages/`.
4. **GitNexus Sync**: Re-run analyzer if any symbol structures changed: `gitnexus analyze --embeddings`.
