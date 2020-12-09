var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Rando_1 = new ol.format.GeoJSON();
var features_Rando_1 = format_Rando_1.readFeatures(json_Rando_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rando_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rando_1.addFeatures(features_Rando_1);
var lyr_Rando_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rando_1, 
                style: style_Rando_1,
                interactive: true,
                title: '<img src="styles/legend/Rando_1.png" /> Rando'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Rando_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Rando_1];
lyr_Rando_1.set('fieldAliases', {'id': 'id', 'longeur': 'longeur', });
lyr_Rando_1.set('fieldImages', {'id': 'TextEdit', 'longeur': 'Range', });
lyr_Rando_1.set('fieldLabels', {'id': 'no label', 'longeur': 'no label', });
lyr_Rando_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});