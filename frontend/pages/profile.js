import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProfileRatings from "@/components/ProfileRatings";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container-profile">
        <div className="profile-box">
          <div className="profile-info">
            {data.user?.image ? (
              <img src="profile-pic.png" className="profile-pic" />
            ) : (
              <div
                className="profile-pic-placeholder"
                data-initial={data.user?.name.charAt(0)}
              />
            )}
            <h3>{data.user?.name}</h3>
            <p>{data.user?.email}</p>
          </div>
          <ProfileRatings />
        </div>
      </div>
      <Footer />
    </>
  );
}
