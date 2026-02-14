# Thematic Pair Audit

Audit two consecutive chapters for thematic coherence, narrative tension, and embodiment of the book's philosophy.

## Input
$ARGUMENTS — paths to two consecutive chapter files (e.g., `book/1.1_opening.md book/1.2_drive.md`)

## Context

This book's thesis is that no single narrative is reality. The alternating POV structure exists to demonstrate this — each chapter is a narrative, and the reader holds both to see what neither character can see alone. The reader becomes the Scientist: observing both Personality-driven narratives without being trapped in either.

## Process

Read both chapter files. Then read `outline/05_philosophy.md` for the philosophical framework.

Identify the POV character of each chapter and audit the pair against each criterion below.

### 1. Narrative Tension / Ironic Gap
- Do the two POVs disagree perceptually about shared events?
- What does Character A read as one thing that Character B reads differently?
- Does the reader see a third truth that neither character sees?
- If the chapters agree on everything, the structure is failing — flag this
- **FAILING:** Two cameras on the same event. **WORKING:** Two fundamentally different ways of experiencing reality.

### 2. Dramatic Irony Accumulation
- What does the reader now know that Character A doesn't know?
- What does the reader now know that Character B doesn't know?
- Has the gap between reader-knowledge and character-knowledge widened?
- List specific moments where the reader sees more than the characters

### 3. Philosophy as Lived Example
- Is the Scientist/Personality framework embodied in action, never stated?
- Where does a character grasp (close the fist, try to control narrative)?
- Where does a character gather (open, receive, observe without agenda)?
- Where does personality override observation?
- Where does a character see something true and then narrate over it?
- **VIOLATION:** Any moment where the philosophy is explained rather than enacted in the prose (exception: characters explicitly discussing McGilchrist or the framework in dialogue)

### 4. Thematic Counterpoint
- Do shared images, words, or gestures appear in both chapters but mean different things?
- Does a moment from Chapter A rhyme with or invert a moment in Chapter B?
- List specific echoes and what they reveal through the difference
- **Example:** "Like a church made out of sound" means liberation to Persephone and taxonomy to Sergey — the same words, two worlds

### 5. Ambiguity Preservation
- Can a careful reader take Character A's side? Can they take B's?
- Is either character made clearly right or clearly wrong?
- Are there moments that support multiple interpretations simultaneously?
- Does the pair resist collapsing into a single "correct" reading?
- **FAILING:** One character is obviously right, the other obviously wrong. **WORKING:** Both characters are right about something and blind to something, and the reader can feel both.

### 6. Emotional Rhythm
- What is the dominant emotional texture of Chapter A? Of Chapter B?
- Do they complement or duplicate each other?
- Does the pair breathe — comedy/weight, tension/release, intimacy/distance?
- Is there at least one tonal shift between the two chapters?
- **FAILING:** Same emotional register across both chapters. **WORKING:** The pair creates a rhythm the reader can feel.

### 7. Motif Threading
- Do recurring images appear across the pair? (hands, light/dark, the crack, grasping/gathering, sheep, stones, wind, silence, names, music)
- Do they evolve or just repeat?
- Is a new motif introduced that will carry forward?
- **FAILING:** A motif appears identically in both chapters. **WORKING:** A motif transforms — what was literal becomes figurative, what was funny becomes painful, what was background becomes foreground.

### 8. The Narrative Chain
- Where does a narrative originate in this pair? (Who tells the story first?)
- How is it received, distorted, or passed along?
- Does the reader see the distortion that the characters can't?
- Is there a moment where a character accepts someone else's narrative as their own reality?
- Connect to the gaslighting chain if applicable (George → Rosemary → Persephone, Damian → public, etc.)

## Output Format

```
## Pair: [Chapter A] ↔ [Chapter B]
**POV A:** [character] | **POV B:** [character]

### 1. Narrative Tension
**Rating:** STRONG / ADEQUATE / WEAK
[Analysis — specific lines/moments from both chapters]

### 2. Dramatic Irony
**Reader now knows:** [bulleted list]
**A doesn't know:** [list]
**B doesn't know:** [list]

### 3. Philosophy Embodied
**Rating:** STRONG / ADEQUATE / WEAK
**Grasping moments:** [list with chapter/line]
**Gathering moments:** [list with chapter/line]
**Violations (stated not enacted):** [list or "None"]

### 4. Thematic Counterpoint
**Echoes found:** [list of paired moments]
**Missing opportunities:** [suggested counterpoints that could be added]

### 5. Ambiguity
**Rating:** STRONG / ADEQUATE / WEAK
[Analysis — where the pair resists or collapses into single reading]

### 6. Emotional Rhythm
**Chapter A texture:** [description]
**Chapter B texture:** [description]
**Rating:** STRONG / ADEQUATE / WEAK

### 7. Motifs
**Threaded:** [list of motifs that appear in both, with evolution noted]
**Dropped:** [motifs from A that don't appear in B where they should]
**Introduced:** [new motifs]

### 8. Narrative Chain
[Analysis of how narratives flow between/within the pair]
```

Then provide:

```
## Summary

**Strongest dimension:** [which criterion is working best]
**Weakest dimension:** [which needs the most work]
**Top 3 suggested revisions:** [specific, actionable changes to strengthen the pair]
```

Do NOT make any edits. This is a read-only audit.
