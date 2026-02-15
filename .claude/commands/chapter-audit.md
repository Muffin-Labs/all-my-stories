# Chapter Audit

Audit the chapter at the given path against All My Stories writing criteria.

## Input
$ARGUMENTS — path to the chapter file (e.g., `book/1.02_drive.md`)

## Process

Read the chapter file. Then read `outline/characters.md` for physical reference and `CLAUDE.md` for the full criteria.

Audit the chapter against each of the following criteria. For each, go section by section (use `---` breaks or natural scene shifts as section boundaries).

### 1. Third Person Limited (Strict)
- Identify the POV character from the chapter header or context
- Flag every line where we are inside another character's head (knowing their thoughts, feelings, memories, decisions)
- Inferences framed as the POV character's interpretation are OK ("he suspected," "she had to know")
- Stating what others feel/believe/remember as fact is a violation

### 2. Visual Imagination
- Does each section ground the reader physically in the space?
- Are there sensory details beyond the intellectual? (sight, sound, smell, texture, temperature)
- Are bodies in space? (where people are relative to each other, hands, posture, movement)
- Is the setting evoked or just named?
- Rate each section: STRONG / ADEQUATE / WEAK

### 3. Show Not Tell
- Flag any line that TELLS the reader what to feel or understand instead of SHOWING it through action, detail, or dialogue
- "She was sad" = telling. "She turned to the window and didn't speak for the next twenty miles" = showing.
- "He was brilliant" = telling. "He'd read the book in two days and could recite the argument from memory" = showing.
- "Their friendship was deep" = telling. Show it through behavior, history, the way they talk to each other.
- Abstractions without grounding are a form of telling. Every emotional claim should be backed by something observable.
- Rate each section: STRONG / ADEQUATE / WEAK

### 4. Emotional Depth
- Does each section have a moment that hooks feelings, not just intellect?
- Does emotion arise from situation rather than telling? (This is closely related to Show Not Tell — if emotion is told, it fails both criteria)
- Is there tension between what characters say and what they feel?
- Rate each section: STRONG / ADEQUATE / WEAK

### 5. Sheepey Convention (if Sheepey appears)
- Kathleen and Persephone never speak AS Sheepey (no first-person voice)
- They discuss Sheepey in third person, directed to each other or someone else
- Flag any violations

### 6. Character Voice
- Does the POV character's internal voice match their established patterns?
- Reference `outline/characters.md` and `CLAUDE.md` for voice guidelines
- Flag any moments where the voice slips into a different character's register

## Output Format

For each section, report:

```
## Section N: [brief description] (Lines ~X-Y)

**POV Violations:** [list or "None"]
**Visual:** [STRONG/ADEQUATE/WEAK] — [explanation, specific lines if weak]
**Show Not Tell:** [STRONG/ADEQUATE/WEAK] — [flag specific telling lines]
**Emotional:** [STRONG/ADEQUATE/WEAK] — [explanation]
**Sheepey:** [OK/VIOLATION/N/A]
**Voice:** [OK/SLIP] — [explanation if slip]
```

Then provide:

```
## Summary

**Total POV violations:** N
**Sections needing visual work:** [list]
**Sections needing emotional work:** [list]
**Suggested fixes:** [numbered list of specific, actionable changes]
```

Do NOT make any edits. This is a read-only audit. Report findings and suggest fixes for the user to approve.
