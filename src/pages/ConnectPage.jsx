import { useNavigate, useSearchParams } from "react-router";

function ConnectPage() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="content-center">
        <a className="bg-[#BE93FE] text-white rounded-lg p-2"
          href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=hatjqubn1mwj09m17p6tdfmj983tim&redirect_uri=http://localhost:5173/viewers&scope=user%3Aread%3Aemail+user%3Aread%3Afollows+moderator%3Aread%3Achatters+channel%3Aread%3Avips+moderation%3Aread"
          target="_blank"
        >
          Começar!
        </a>
      </div>
      
    </div>
  );
}

export default ConnectPage;
