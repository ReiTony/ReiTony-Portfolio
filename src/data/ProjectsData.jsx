export const ProjectsData = [
  {
    id: 1,
    title: "EduPlay",
    description:
      "A school management system designed for Grades 1 to 3, combining administrative tools with educational games to create a fun and engaging learning environment.",
    image: "/images/project2.png",
    githubLink: "https://github.com/ReiTony/EduPlay-main",
    websiteLink: "https://eduplay-lhjs.onrender.com/",
    downloadAppLink: "",
    formattedSpecifications: (
      <div className="space-y-4">
        <div><strong>Type:</strong> Commissioned Project</div>
        <div><strong>Role:</strong> Backend Developer</div>
        <div>
          <strong>Tech Stack:</strong>
          <ul className="list-disc pl-5">
            <li>Front-end: React.js</li>
            <li>Back-end: Node.js (Express.js)</li>
            <li>Database: MongoDB</li>
            <li>Other: JWT (authentication), Bcrypt (password hashing)</li>
          </ul>
        </div>
        <div>
          <strong>Features:</strong>
          <ul className="list-disc pl-5">
            <li>Role-based user and profile management</li>
            <li>Quizzes for Grades 1–3 with full CRUD support</li>
            <li>Tracks student progress and achievements</li>
            <li>Auto-notifies students on completion</li>
            <li>Secured via JWT and Bcrypt</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Thought Bubble",
    description:
      "A journaling app with built-in sentiment analysis and emotion tracking to promote mental wellness and self-awareness through daily reflections.",
    image: "/images/project2.png",
    githubLink: "https://github.com/orgs/Thought-Bubble-Team/repositories",
    websiteLink: "",
    downloadAppLink: "https://expo.dev/accounts/sephclt/projects/thought-bubble/builds/ee52046e-a1fd-4269-a4e6-59901b516297?fbclid=IwY2xjawJ3WkRleHRuA2FlbQIxMABicmlkETFibUxXcGFQc1l2UTRWamFpAR4ce0oc8uzwvhiQYkRkqDnpoUjKE8s_PwNgDSjHXp21sYSpfsx6WSWvfOOYrw_aem_QfZuq5hUVGLYTyjRkccKyA",
    formattedSpecifications: (
      <div className="space-y-4">
        <div>
          <strong>Type:</strong> Capstone Project
        </div>
        <div>
          <strong>Role:</strong> AI Engineer & Backend Developer
        </div>
        <div>
          <strong>Tech Stack:</strong>
          <ul className="list-disc pl-5">
            <li>Back-end: FastAPI (Python)</li>
            <li>Database: Supabase (PostgreSQL)</li>
            <li>
              Models Used:
              <ul className="list-disc pl-5 mt-1">
                <li>
                  cardiffnlp/twitter-roberta-base-sentiment-latest (sentiment
                  classification)
                </li>
                <li>SamLowe/roberta-base-go_emotions (emotion detection)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <strong>Features:</strong>
          <ul className="list-disc pl-5">
            <li>Encrypted journaling</li>
            <li>AI sentiment & emotion analysis via Hugging Face</li>
            <li>Mood Calendar & Mood Bar visualizations</li>
            <li>Word frequency tracking for reflection</li>
            <li>Personalized AI-generated emotional feedback</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "FSL Interpreter",
    description:
      "A mobile app that recognizes Filipino Sign Language (FSL) gestures in real time using AI and hand tracking.",
    image: "/images/project_fsl.png",
    githubLink: "",
    websiteLink: "",
    downloadAppLink: "https://github.com/FSL-Interpreter-Team/fsl-interpreter-app-android/releases/download/v1.0.0/fsl-gesture-recognizer-release-04-24-2025.apk",
    formattedSpecifications: (
      <div className="space-y-4">
        <div><strong>Type:</strong> Commissioned Project</div>
        <div><strong>Role:</strong> AI Engineer & Backend Developer</div>
        <div>
          <strong>Tech Stack:</strong>
          <ul className="list-disc pl-5">
            <li>Back-end: FastAPI</li>
            <li>AI Model: 1D CNN trained on MediaPipe Gesture Recognition</li>
            <li>Database: Supabase (PostgreSQL + Storage)</li>
            <li>Hand Tracking: MediaPipe</li>
            <li>Deployment: Locally as an Android mobile app built with Kotlin</li>
          </ul>
        </div>
        <div>
          <strong>Features:</strong>
          <ul className="list-disc pl-5">
            <li>Real-time gesture recognition for alphanumeric signs</li>
            <li>Motion tracking for dynamic gestures (e.g., "J", "Z")</li>
            <li>MediaPipe-powered hand landmark extraction</li>
            <li>Custom-trained deep learning model for FSL</li>
          </ul>
        </div>
      </div>
    )
  },  
  {
    id: 4,
    title: "Psoriasis Severity Detector",
    description:
      "A web app that uses AI to classify the severity of psoriasis from skin images, offering fast, private, and accessible assessments.",
    image: "/images/project_psoriasis.png",
    githubLink: "",
    websiteLink: "https://psoriasis-detector.onrender.com/",
    downloadAppLink: "",
    formattedSpecifications: (
      <div className="space-y-4">
        <div><strong>Type:</strong> Commissioned Project</div>
        <div><strong>Role:</strong> AI Engineer & Backend Developer</div>
        <div>
          <strong>Tech Stack:</strong>
          <ul className="list-disc pl-5">
            <li>Back-end: FastAPI</li>
            <li>AI Model: EfficientNet-B0 (TensorFlow/Keras)</li>
            <li>Database: Supabase (PostgreSQL + Storage)</li>
            <li>Deployment: Hugging Face Spaces, Azure ML</li>
          </ul>
        </div>
        <div>
          <strong>Features:</strong>
          <ul className="list-disc pl-5">
            <li>AI-powered skin severity classification</li>
            <li>Real-time image analysis with confidence scoring</li>
            <li>Supabase integration for secure image storage</li>
            <li>Hugging Face-hosted inference endpoint</li>
            <li>Supports automated model retraining via Azure</li>
          </ul>
        </div>
      </div>
    )
  }
];
