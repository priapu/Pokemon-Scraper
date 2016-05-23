var Xray = require('x-ray');
var scraper = Xray();

scraper('http://pokemondb.net/pokedex/all', '#pokedex tbody tr', [{
  pokedex_id: 'td:first-child',
  'name': '.ent-name',
  'type': scraper('.cell-icon', ['a']),
  'hp': 'td:nth-child(5)',
  'atk': 'td:nth-child(6)',
  'def': 'td:nth-child(7)',
  'sp_atk': 'td:nth-child(8)',
  'sp_def': 'td:nth-child(9)',
  'speed': 'td:nth-child(10)',
}])
.stream();
