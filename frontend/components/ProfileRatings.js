import { useState } from "react";
import React from "react";
export default function ProfileRatings() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <div
        style={{
          padding: "10px",
          border: "2px solid #000000",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        {" "}
        Toggle Ratings{" "}
      </div>
      {collapsed && (
        <div
          style={{
            padding: "10px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          // Content inside accordion
          <div class="accordion">
            <div class="accordion-item">
              <div class="accordion-item-header" onclick="toggleAccordion()">
                Toggle Ratings
              </div>

              <div class="accordion-item-body" id="ratings">
                <div class="star" onclick="setRating(0)">
                  ☆☆☆☆☆
                </div>
                <div class="star" onclick="setRating(1)">
                  ★☆☆☆☆
                </div>
                <div class="star" onclick="setRating(2)">
                  ★★☆☆☆
                </div>
                <div class="star" onclick="setRating(3)">
                  ★★★☆☆
                </div>
                <div class="star" onclick="setRating(4)">
                  ★★★★☆
                </div>
                <div class="star" onclick="setRating(5)">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function toggleAccordion() {
  const ratingsBody = document.getElementById("ratings");
  ratingsBody.style.display =
    ratingsBody.style.display === "none" ? "block" : "none";
}

async function setRating(value) {
  try {
    await fetch("/api/ratings/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    // Update the displayed ratings after setting a new rating
    const ratings = await fetchRatings();
    displayRatings(ratings);
  } catch (error) {
    console.error(error);
  }
}

async function fetchRatings() {
  try {
    const response = await fetch("/api/ratings/all");
    const ratings = await response.json();
    return ratings;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function displayRatings(ratings) {
  const stars = document
    .getElementById("ratings")
    .getElementsByClassName("star");

  // Reset stars to empty
  for (let i = 0; i < stars.length; i++) {
    stars[i].innerHTML = "☆";
  }

  // Fill stars based on ratings
  ratings.forEach((rating) => {
    for (let i = 0; i < rating.value; i++) {
      stars[i].innerHTML = "★";
    }
  });
}
