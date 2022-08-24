/** @format */

import { useParams } from "react-router-dom";

const data = {
  smiletmf: { name: "유슬이", description: "리액트를 좋아하는 개발자" },
  mingki: { name: "밍키", description: "요술공주" },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자의 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
