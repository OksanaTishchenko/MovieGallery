import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);

  const login = useCallback((id, name) => {
    setUserId(id);
    setName(name);
    localStorage.setItem("userData", JSON.stringify({ userId: id, name }));
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setName(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.userId) {
      login(data.userId, data.name);
    }
  }, [login])

  return { userId, name, login, logout };
}