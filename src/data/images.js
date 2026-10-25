// Exact Unsplash photographs used by the design. See PHOTO-CREDITS.md.
const unsplash = (id, width) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const PHOTO_IDS = {
  doctorMotherSon: 'photo-1758691463331-2ac00e6f676f',
  doctorChild: 'photo-1758691463080-30a990ef61bb',
  doctorMotherChild: 'photo-1758691462126-2ee47c8bf9e7',
  doctorGrandfather: 'photo-1758691462666-6470b740f544',
  newbornFamily: 'photo-1774041339887-9ab8c56f7482',
};

export const photo = (key, width) => unsplash(PHOTO_IDS[key], width);
