# AI-Quizz

AI in Focus is a beginner-friendly AI and GPT quiz for photography enthusiasts. It uses plain HTML, CSS, and JavaScript with no package dependencies.

## Quiz behavior

- Eight questions with four options each: six single-answer questions and two multi-answer questions (questions 4 and 7).
- Each question awards one point. Multi-answer questions require exactly two selections, and both must be correct; there is no partial credit.
- Checking an answer locks the selections and displays the correct answers with an explanation. Select Next question to continue.
- Results show the score out of eight, a rounded percentage, and expandable answer reviews.
- Take another shot resets the score and starts question 1. Reloading returns to the introduction; progress is not saved.
- No sign-in, timer, API key, backend, or AI service is used. Questions are bundled with the app; it does not upload photographs or send answers to a service.

## Prerequisites and local setup in VS Code

Use a current Chrome, Edge, Firefox, or Safari browser with JavaScript enabled. The stylesheet uses modern CSS including `:has()` and `:focus-visible`. VS Code is useful for editing but is not required to play.

1. Download and extract this repository, or use an existing local checkout of the reviewed `main` branch.
2. In VS Code, choose **File > Open Folder** and select the `AI-Quizz` repository root: the folder containing `index.html`, `styles.css`, `questions.js`, `quiz.js`, and this README. Do not open its parent folder or an individual file as the workspace.
3. If using the integrated terminal, its working directory should be that same repository root. No terminal commands are required to install, build, or run this app. There is no package manifest or configured build/dev-server command; do not assume an `npm` command exists.
4. Open the root `index.html` in your browser through the browser's **Open File** action or your operating system's file manager. Keep all four application files together so their relative paths resolve. VS Code's text editor is not the running quiz.
5. The expected initial view is the styled introduction. Once scripts initialize, the loading message disappears and the Start button becomes available.

No extension, local server, external service, credentials, or Exchange environment is required for these local checks. This opening procedure is based on the source's relative stylesheet and classic deferred script references; it has not been browser-tested in this review.

## Files and shared interfaces

| File | Purpose |
| --- | --- |
| `index.html` | Introduction and `#app` container; loads the stylesheet and then deferred question-data and controller scripts. |
| `styles.css` | Responsive layout, focus indicators, answer states, feedback, and result styling. |
| `questions.js` | Exposes `window.quizQuestions`: objects with `title`, `options`, zero-based `correct` indices, and `explanation`. |
| `quiz.js` | Enables `#start`, clears `#initialization-status`, renders the quiz, validates selections, scores answers, and handles review/restart. |

The current controller and introduction expect exactly eight questions, including two questions with two correct answers. Preserve this contract when editing content, or update the controller, introduction, and manual checks together. The visible option numbers below are one-based; the data's answer indices are zero-based.

## Testing and expected results

There is no automated test suite or test command configured. The following are manual acceptance checks, not recorded successful test results. Run them in the browser after opening the local app, using developer tools as needed.

### Flow and selection validation

- Start the quiz: question 1 of 8 appears with zero points.
- Submit without selecting an answer: an error appears, with no score or question advancement.
- Single-answer questions allow only one selection.
- On questions 4 and 7, try zero, one, and three selections: checking must request exactly two answers and must not award a point. Changing selections updates the selection count.
- Check a valid selection: feedback appears, inputs become disabled, and the action changes to Next question (or See my score on question 8). The same answer must not be scored again.

### Scoring and review

For an all-correct run, choose these options in their displayed order:

| Question | Correct option(s) |
| --- | --- |
| 1 | 2 |
| 2 | 3 |
| 3 | 1 |
| 4 | 1 and 3 |
| 5 | 4 |
| 6 | 2 |
| 7 | 1 and 3 |
| 8 | 3 |

- All correct: expect **8 out of 8 (100%)**.
- All incorrect: choose 1, 1, 2, 2+4, 1, 1, 2+4, 1 respectively; expect **0 out of 8 (0%)**.
- Mixed run: answer everything correctly except question 4, where you select options 1 and 2. That question must earn zero; expect **7 out of 8 (88%)**. Repeat this partial-match check for question 7.
- Expand each result review: selected answers, correct answers, correctness label, and explanation must match that run.
- Select Take another shot: expect question 1, zero points, and no selected answers. A new run must not include earlier responses.

### Feedback color regression

Before submission, a selected answer has green selection styling. After submitting a wrong single answer, its option border/background must turn red and the correct answer must be green. On question 4 with options 1 and 2 selected, option 2 must be red, while correct options 1 and 3 must be green. Text labels must also distinguish selected, correct, and incorrect answers without relying only on color.

### Mobile and accessibility checks

- In browser responsive mode, check 320px, 375px, and 768px widths, plus desktop. Test the introduction, longest question/options, feedback, and results. Expect readable wrapping, reachable controls, and no horizontal page scrolling.
- Check at 200% browser zoom and in portrait/landscape. Confirm answer labels remain easy to tap. Desktop emulation does not replace a real-phone check.
- Use Tab/Shift+Tab, arrow keys for radio groups, Space for checkboxes, and Enter/Space for buttons and review summaries. Expect visible focus and a complete playable flow without a mouse.
- With a screen reader, verify question/group labels, selection counts, validation errors, focused feedback, and result reviews are understandable. Question/result headings receive focus on navigation.
- With reduced motion enabled, verify interaction remains usable without transitions.

### Phone access and deployment boundary

To test on a separate phone, make the same four application files available through a static site host or an appropriately configured reachable server, then open its URL on the phone. A desktop `file://` path is not a shareable phone URL. Hosting setup, deployment commands, HTTPS, and access controls are not configured in this repository and were not verified. No specific hosting service is required by the application. Validate the complete quiz before publishing.

## Troubleshooting and validation status

If Start stays disabled, confirm JavaScript is enabled and both script files are next to `index.html`; inspect the browser console for loading or script errors. An unstyled page suggests a missing or incorrectly located `styles.css`. After updating files, reload the page and check that the browser is using the current copies.

This documentation was checked against repository source only. No JavaScript execution, browser, real-phone, keyboard, screen-reader, or scoring tests were performed in this review. Record browser/device details and actual outcomes when running the checks above.

## Merge records

<!-- bumblebee-pr-2 -->
### Merged change: Add responsive mobile-friendly quiz styles

Merged pull request #2: https://github.com/MarcoLFrancisco/AI-Quizz/pull/2

Files in the approved proposal:
- styles.css

Bumblebee has not run automated tests or verified runtime behavior for this change.


<!-- bumblebee-pr-4 -->
### Merged change: Add eight photography-themed AI and GPT quiz questions

Merged pull request #4: https://github.com/MarcoLFrancisco/AI-Quizz/pull/4

Files in the approved proposal:
- questions.js

Bumblebee has not run automated tests or verified runtime behavior for this change.


<!-- bumblebee-pr-6 -->
### Merged change: Implement quiz interaction, exact-match scoring, review and restart

Merged pull request #6: https://github.com/MarcoLFrancisco/AI-Quizz/pull/6

Files in the approved proposal:
- quiz.js

Bumblebee has not run automated tests or verified runtime behavior for this change.


<!-- bumblebee-pr-8 -->
### Merged change: Fix wrong answers retaining green selection colors after submission

Merged pull request #8: https://github.com/MarcoLFrancisco/AI-Quizz/pull/8

Files in the approved proposal:
- styles.css

Bumblebee has not run automated tests or verified runtime behavior for this change.
