NDA Prepare

A beginner-first English learning and NDA/SSB preparation app.

Principles
1. Hindi-supported explanations that gradually increase English immersion.
2. Teach, practise, explain mistakes, and revisit weak areas.
3. Separate written NDA English practice from spoken communication and broader SSB preparation.
4. Offline-first learning content; no paid AI API is required for core lessons and quizzes.
5. Microphone permission must be requested clearly, with a typing alternative.

Exam accuracy
The official UPSC NDA/NA scheme assigns 600 marks to GAT, including 200 marks for English and 400 for General Knowledge. Written papers are objective type. Topic counts and formats can vary. Do not label original questions as official previous-year questions. SSB assesses broader suitability and officer-like qualities, not English alone.

Official research starting points
UPSC NDA/NA notifications: https://upsc.gov.in/examinations
UPSC previous question papers: https://upsc.gov.in/examinations/previous-question-papers
Use official notifications and papers as primary sources. Coaching sites can help identify practice patterns but are not authoritative about future questions.

Build
The GitHub Actions workflow at .github/workflows/build-apk.yml validates the question bank, creates the Capacitor Android project, builds a debug APK and uploads it as a workflow artifact.

Quality gates
Check JavaScript syntax, question IDs and answer indices, explanations, navigation, local progress storage, microphone fallback, and the actual Android workflow result before calling a build successful.

No app can guarantee selection or a particular score. The question bank should grow through verified past papers and carefully reviewed original practice.