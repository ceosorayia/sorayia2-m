import React from "react";
import "../docs.css";

const page = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Heroes Studio</h1>
      <p className="main-paragraph">
        Heroes Studio is a powerful and intuitive tool within Sorayia.com that
        allows creators to design and personalize digital avatars with
        intricate, human-like characteristics. Each feature provides a unique
        layer of depth, enabling creators to craft highly engaging and realistic
        avatars that interact meaningfully with users. Key features include:
      </p>

      <h2 className="section-title">Long-Term Memory</h2>
      <ul className="bullet-points">
        <li>
          <span>Autonomous Memory Management:</span> Avatars autonomously manage
          memories through scalable external storage, maintaining continuity
          across interactions.
        </li>
        <li>
          <span>User-Tagged Memories:</span> Users can manually tag important
          messages or add specific memories, enriching the avatar’s
          personalization and creating a rich, interactive history.
        </li>
      </ul>

      <h2 className="section-title">Chat History</h2>
      <ul className="bullet-points">
        <li>
          <span>Pre-Populated Chat Context:</span> Populate initial chat history
          to reinforce the avatar’s preferences, tone, and conversational style,
          establishing a consistent voice.
        </li>
        <li>
          <span>Customizable Communication Style:</span> Tailor the avatar’s
          dialogue style—whether formal or casual—to align with its personality
          and the user’s preferences.
        </li>
        <li>
          <span>User Feedback on Responses:</span> Enable users to give feedback
          on responses, helping refine the avatar’s conversational style for a
          more tailored experience.
        </li>
        <li>
          <span>Conversation History Control:</span> Allow users to delete chat
          history, ensuring full control over recorded interactions.
        </li>
      </ul>

      <h2 className="section-title">Backstory & Personality</h2>
      <ul className="bullet-points">
        <li>
          <span>Detailed Profile Creation:</span> Define essential traits like
          name, age, setting, background, and personality, giving each avatar a
          unique identity.
        </li>
        <li>
          <span>Targeted Interests:</span> Specify the topics and activities
          that captivate the avatar, directing its conversations and adding
          depth to its interactions.
        </li>
      </ul>

      <h2 className="section-title">First Message</h2>
      <ul className="bullet-points">
        <li>
          <span>Customizable Initial Greeting:</span> Set the avatar’s first
          message to establish the tone and context, creating a welcoming and
          contextualized introduction.
        </li>
        <li>
          <span>Relationship Dynamics:</span> Define how the avatar relates to
          users—from an acquaintance to a trusted confidant—creating
          personalized and meaningful interactions.
        </li>
      </ul>

      <h2 className="section-title">AI Voice Generator</h2>
      <ul className="bullet-points">
        <li>
          <span>Voice Personalization:</span> Customize a unique AI-generated
          voice that reflects the avatar’s personality, giving it a distinct
          vocal presence.
        </li>
      </ul>

      <h2 className="section-title">TTS (Text-to-Speech)</h2>
      <ul className="bullet-points">
        <li>
          <span>Natural-Sounding Audio:</span> Convert written text into
          realistic, expressive audio, allowing the avatar to speak for a more
          immersive experience.
        </li>
      </ul>

      <h2 className="section-title">Speech Recognition</h2>
      <ul className="bullet-points">
        <li>
          <span>Voice Command Compatibility:</span> Enable the avatar to
          understand and respond to spoken input, making interactions more
          intuitive and accessible.
        </li>
      </ul>

      <h2 className="section-title">Multilingual Capabilities</h2>
      <ul className="bullet-points">
        <li>
          <span>Language Options:</span> Allow the avatar to understand and
          communicate in multiple languages, making it accessible to a global
          audience.
        </li>
      </ul>

      <h2 className="section-title">Narrated Actions</h2>
      <ul className="bullet-points">
        <li>
          <span>Action Descriptions:</span> Add depth to interactions by
          allowing the avatar to narrate its actions or surroundings, enhancing
          user engagement.
        </li>
      </ul>

      <h2 className="section-title">Response Regeneration</h2>
      <ul className="bullet-points">
        <li>
          <span>Response Refresh:</span> Enable users to regenerate avatar
          responses, providing flexibility and control over the conversation
          flow.
        </li>
      </ul>

      <h2 className="section-title">Emotions and Emotes</h2>
      <ul className="bullet-points">
        <li>
          <span>Emotional Depth:</span> Define a range of emotional responses
          with matching animations and body language, creating a relatable and
          engaging avatar.
        </li>
      </ul>

      <h2 className="section-title">Emotion Recognition</h2>
      <ul className="bullet-points">
        <li>
          <span>Emotional Sensitivity:</span> Equip the avatar to detect and
          respond to users’ emotional cues, adding empathy and enhancing
          interaction.
        </li>
      </ul>

      <h2 className="section-title">Continuous Learning</h2>
      <ul className="bullet-points">
        <li>
          <span>Evolving Intelligence:</span> Enable the avatar to learn from
          each interaction, continuously refining its responses and adapting to
          improve the user experience.
        </li>
      </ul>

      <h2 className="section-title">DID Authentication</h2>
      <ul className="bullet-points">
        <li>
          <span>Cross-Platform Memory Retrieval:</span> Through decentralized
          identity (DID) authentication, avatars can retrieve conversation
          histories from other apps, enabling a seamless cross-platform memory
          and enhancing continuity.
        </li>
      </ul>

      <h2 className="section-title">Lip Sync and Audio-to-Expression</h2>
      <ul className="bullet-points">
        <li>
          <span>Lifelike Expressions:</span> Enhance the avatar’s realism with
          synchronized lip movement and expressions that match spoken audio,
          bringing the character to life.
        </li>
      </ul>
    </div>
  );
};

export default page;
