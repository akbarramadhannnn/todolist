export const sortAscendingByTitle = (data) => {
  // === mengurutkan dari yang terkecil
  const dataSort = data.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA > titleB) {
      return 1;
    }

    if (titleA < titleB) {
      return -1;
    }

    return 0;
  });
  return dataSort;
};

export const sortDescendingByTitle = (data) => {
  // === mengurutkan dari yang terbesar
  const dataSort = data.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA > titleB) {
      return -1;
    }
    if (titleA < titleB) {
      return 1;
    }

    return 0;
  });
  return dataSort;
};

export const sortByUnfinished = (data) => {
  // === mengurutkan dari yang belum selesai
  const dataSort = data.sort((a, b) => {
    const isActiveA = a.is_active;
    const isActiveB = b.is_active;
    if (isActiveA > isActiveB) {
      return -1;
    }
    if (isActiveA < isActiveB) {
      return 1;
    }

    return 0;
  });
  return dataSort;
};

export const sortByOldest = (data) => {
  // === mengurutkan dari yang terlama
  const dataSort = data.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;
    if (idA > idB) {
      return 1;
    }
    if (idA < idB) {
      return -1;
    }

    return 0;
  });
  return dataSort;
};

export const sortByLatest = (data) => {
  // === mengurutkan dari yang terbaru
  const dataSort = data.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;
    if (idA > idB) {
      return -1;
    }
    if (idA < idB) {
      return 1;
    }

    return 0;
  });
  return dataSort;
};
