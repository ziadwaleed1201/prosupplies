const API_BASE = "http://localhost:5001";

export const getSections = () =>
  fetch(`${API_BASE}/api/sections`).then(res => res.json());

export const getPartners = () =>
  fetch(`${API_BASE}/api/partners`).then(res => res.json());

export const getContact = () =>
  fetch(`${API_BASE}/api/contact`).then(res => res.json());
