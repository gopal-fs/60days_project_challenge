import React, { useEffect, useState } from "react";

const CLIENT_ID =
  "Your Client ID";

export default function App() {
  const [user, setUser] = useState(null);
  const [tokenClient, setTokenClient] = useState(null);

  useEffect(() => {
    if (!window.google) return;

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: "openid email profile",
      callback: async (response) => {
        if (response.access_token) {
          const res = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${response.access_token}`,
              },
            }
          );

          const data = await res.json();
          setUser(data);
        }
      },
    });

    setTokenClient(client);
  }, []);

  const handleGoogleLogin = () => {
    if (tokenClient) {
      tokenClient.requestAccessToken();
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white gap-4">
        <h1 className="text-3xl font-bold">Protected Page 🔐</h1>

        <img
          src={user.picture}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />

        <p>{user.name}</p>
        <p>{user.email}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white gap-6">
      <h1 className="text-3xl font-bold">Login</h1>

      <button
        onClick={handleGoogleLogin}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
      >
        Continue with Google 🚀
      </button>
    </div>
  );
}


/* SEND TOKEN TO BACKEND */

/* import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(CLIENT_ID);

const ticket = await client.verifyIdToken({
  idToken: tokenFromFrontend,
  audience: CLIENT_ID,
});

const payload = ticket.getPayload();


*/