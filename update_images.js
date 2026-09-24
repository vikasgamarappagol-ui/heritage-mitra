const fs = require('fs');
const path = require('path');

const destPath = path.join(__dirname, 'source_data', 'structured', 'destinations.json');
const destinations = JSON.parse(fs.readFileSync(destPath, 'utf8'));

const foodImages = {
  dest_food_jolada_rotti_badami: "/images/food/jolada_rotti.jpg",
  dest_food_susla_badami:        "/images/food/susla_mirchi_bajji.jpg",
  dest_food_jalebi_badami:       "/images/food/jalebi_rabri.jpg",
  dest_food_jolada_rotti_bgk:    "/images/food/jolada_rotti.jpg",
  dest_food_susla_bgk:           "/images/food/susla_mirchi_bajji.jpg",
  dest_food_fakirappa_bgk:      "/images/food/fakirappa_sweets.jpg",
  dest_food_savaji_bgk:          "/images/food/savaji_nonveg.jpg",
  dest_food_jalebi_bgk:          "/images/food/jalebi_rabri.jpg",
  dest_food_kardant_singi:       "/images/food/amingad_kardant.jpg",
  dest_food_kardant_kamat:       "/images/food/amingad_kardant.jpg",
  dest_food_holige_ilkal:        "/images/food/shenga_holige.jpg",
  dest_food_holige_guledgudd:    "/images/food/shenga_holige.jpg",
  dest_food_jhunka_mudhol:       "/images/food/jolada_rotti.jpg",
  dest_food_peda_jamkhandi:      "/images/food/galgali_peda.jpg",
  dest_food_galgali_bilagi:      "/images/food/galgali_peda.jpg",
  dest_food_savaji_bilagi:       "/images/food/savaji_nonveg.jpg",
  dest_food_girmit_banhatti:     "/images/food/susla_mirchi_bajji.jpg"
};

destinations.forEach(d => {
  if (foodImages[d.id]) {
    d.image = foodImages[d.id];
  }
});

fs.writeFileSync(destPath, JSON.stringify(destinations, null, 2), 'utf8');
console.log('Updated image fields in destinations.json');
