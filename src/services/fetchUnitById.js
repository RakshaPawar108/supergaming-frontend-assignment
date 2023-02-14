export const fetchUnitById = async (accessToken, unitId) => {
    const response = await fetch("https://test.indusgame.com/units", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      const unit = data.find((unit) => unit.id === unitId);
      if (unit) {
        return { status: 200, data: unit };
      } else {
        return { status: 404, data: null };
      }
    } else {
      return { status: response.status, data };
    }
}