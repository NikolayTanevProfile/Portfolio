# AI Assistant Context Folder

Drop this folder into any web/app/SaaS repo.

## How to Use in Cursor

1. Open Cursor.
2. Start any AI prompt with:
   > "Please reference the context in `ai-assistant/` (especially `rules.md`) before answering."
3. AI will now respond with better reasoning and code, saving thoughts into `thought-logs/`.
4. You can ask the AI to log its thinking:
   > "Save your reasoning to `thought-logs/thoughts-[today's date].md`."

## Folder Structure
- `rules.md`: core self-reflection checklist
- `goal.md`: your project’s purpose
- `style-guide.md`: design/dev conventions
- `architecture.md`: tech stack and patterns
- `lessons.md`: past mistakes and fixes
- `references.md`: links and docs
- `thought-logs/`: logs of AI thinking
