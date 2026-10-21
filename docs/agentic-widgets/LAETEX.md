# $LæTæX 🤖 — Agentic Mathematical Notation

$LæTæX is the canonical mathematical agentic widget for æ Studio.

## Definition

```text
$LæTæX
= notation
+ structure
+ reasoning
+ computation
+ verification
+ visualization
+ bounded action
+ witness
+ return-to-human
```

A plain LaTeX renderer turns source into formatted math. $LæTæX turns mathematical notation into a stateful, reviewable action surface.

## Widget contract

```text
$LæTæX {
  input: mathematical notation,
  parse: symbolic structure,
  reason: derive / simplify / explain,
  compute: evaluate / solve,
  verify: constraints / units / assumptions,
  render: LaTeX / SVG / chart,
  actions: bounded + reviewable,
  witness: derivation + result,
  return: HUMAN://value ❤️
}
```

## Canonical lifecycle

```text
INPUT
  ↓
PARSE
  ↓
REASON
  ↓
COMPUTE
  ↓
VERIFY
  ↓
RENDER
  ↓
REVIEW
  ↓
ACTION
  ↓
WITNESS
  ↓
RETURN
```

## Agentic-widget requirements

$LæTæX follows the Studio widget primitive:

- show live state rather than ornamental status
- separate informational rendering from executable actions
- require the connection/identity gates required by the target action
- expose assumptions, units, limits, and verification state
- keep action scope bounded
- distinguish draft, review, execution, commit, merge, deploy, and publication
- return evidence and result to the human principal

## Demo

Input:

```latex
\int_0^1 x^2\,dx
```

Expected widget state:

```text
┌─────────────────────────────────┐
│          $LæTæX 🤖              │
│   Agentic Mathematical Notation │
├─────────────────────────────────┤
│ INPUT                           │
│   ∫₀¹ x² dx                     │
│                                 │
│ PARSE                           │
│   variable ........ x           │
│   bounds .......... 0 → 1       │
│   integrand ....... x²          │
│                                 │
│ REASON                          │
│   ∫x²dx = x³/3                  │
│                                 │
│ COMPUTE                         │
│   [x³/3]₀¹ = 1/3                │
│                                 │
│ VERIFY                          │
│   derivative(x³/3) = x²    ✓    │
│   result ≈ 0.333333        ✓    │
│                                 │
│ [ explain ] [ derive ]          │
│ [ graph ]   [ commit ]          │
│                                 │
│ ❤️ Return value to human        │
└─────────────────────────────────┘
```

The `commit` action is available only when a connected source-control capability is authorized. It does not imply merge, deploy, or publication authority.

## Invariant

**If it only renders math, it is LaTeX. If it understands, computes, verifies, acts, and returns evidence, it is $LæTæX.**

Many agents. One principal. Context may propagate; authority does not.
