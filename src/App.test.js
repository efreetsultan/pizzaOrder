import React from "react";
import { fireEvent, render, cleanup, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => cleanup());

test("App loads successfully", () => {
  const { container } = render(<App />);
  const landingPage = container.getElementsByClassName("landing-page");
  expect(landingPage.length).toBe(1);
});

test("Click on a character shows more info", async () => {
  const { container } = render(<App />);
  const characterButton = container.getElementsByClassName(
    "header-characters-button"
  );
  await waitFor(() => expect(characterButton[0]).toBeVisible());
  fireEvent.click(characterButton[0]);
  const cardFronts = container.getElementsByClassName("character-card-front");
  setTimeout(() => {
    fireEvent.click(cardFronts[0]);
  }, 2000);
  const cardBacks = container.getElementsByClassName("character-card-back");
  await waitFor(() => {
    expect(cardBacks[0]).toBeVisible;
  });
});

test("Click on a location shows more info", async () => {
  const { container } = render(<App />);
  const locationButton = container.getElementsByClassName(
    "header-locations-button"
  );
  await waitFor(() => expect(locationButton[0]).toBeVisible());
  fireEvent.click(locationButton[0]);
  const cardFronts = container.getElementsByClassName("location-card-front");
  setTimeout(() => {
    fireEvent.click(cardFronts[0]);
  }, 2000);
  const cardBacks = container.getElementsByClassName("location-card-back");
  await waitFor(() => {
    expect(cardBacks[0]).toBeVisible;
  });
});
