var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Divisinparroquial_1 = new ol.format.GeoJSON();
var features_Divisinparroquial_1 = format_Divisinparroquial_1.readFeatures(json_Divisinparroquial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divisinparroquial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divisinparroquial_1.addFeatures(features_Divisinparroquial_1);
var lyr_Divisinparroquial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Divisinparroquial_1, 
                style: style_Divisinparroquial_1,
                popuplayertitle: "División parroquial",
                interactive: true,
                title: '<img src="styles/legend/Divisinparroquial_1.png" /> División parroquial'
            });
var format_InstitucionesEducativasporparroquia_2 = new ol.format.GeoJSON();
var features_InstitucionesEducativasporparroquia_2 = format_InstitucionesEducativasporparroquia_2.readFeatures(json_InstitucionesEducativasporparroquia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitucionesEducativasporparroquia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitucionesEducativasporparroquia_2.addFeatures(features_InstitucionesEducativasporparroquia_2);
var lyr_InstitucionesEducativasporparroquia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstitucionesEducativasporparroquia_2, 
                style: style_InstitucionesEducativasporparroquia_2,
                popuplayertitle: "Instituciones Educativas por parroquia",
                interactive: true,
    title: 'Instituciones Educativas por parroquia<br />\
    <img src="styles/legend/InstitucionesEducativasporparroquia_2_0.png" /> NUEVO PARAÍSO (CAB. EN UNIÓN CHIMBORAZO)<br />\
    <img src="styles/legend/InstitucionesEducativasporparroquia_2_1.png" /> SAN JOSÉ DE GUAYUSA<br />\
    <img src="styles/legend/InstitucionesEducativasporparroquia_2_2.png" /> SAN LUIS DE ARMENIA<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Divisinparroquial_1.setVisible(true);lyr_InstitucionesEducativasporparroquia_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Divisinparroquial_1,lyr_InstitucionesEducativasporparroquia_2];
lyr_Divisinparroquial_1.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', });
lyr_InstitucionesEducativasporparroquia_2.set('fieldAliases', {'zona': 'zona', 'distrito': 'distrito', 'circuito': 'circuito', 'canton': 'canton', 'parroquia': 'parroquia', 'denominaci': 'denominaci', 'tipologia': 'tipologia', 'niveles': 'niveles', 'sostenimie': 'sostenimie', 'jornada': 'jornada', 'jurisdicci': 'jurisdicci', 'amie': 'amie', 'nacionalid': 'nacionalid', 'sector': 'sector', 'ie': 'ie', 'docentes': 'docentes', 'direccion': 'direccion', 'x': 'x', 'y': 'y', 'cedula': 'cedula', 'rector': 'rector', 'titulo': 'titulo', 'correo_per': 'correo_per', 'correo_ins': 'correo_ins', 'celular': 'celular', });
lyr_Divisinparroquial_1.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', });
lyr_InstitucionesEducativasporparroquia_2.set('fieldImages', {'zona': 'TextEdit', 'distrito': 'TextEdit', 'circuito': 'TextEdit', 'canton': 'TextEdit', 'parroquia': 'TextEdit', 'denominaci': 'TextEdit', 'tipologia': 'TextEdit', 'niveles': 'TextEdit', 'sostenimie': 'TextEdit', 'jornada': 'TextEdit', 'jurisdicci': 'TextEdit', 'amie': 'TextEdit', 'nacionalid': 'TextEdit', 'sector': 'TextEdit', 'ie': 'TextEdit', 'docentes': 'TextEdit', 'direccion': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'cedula': 'TextEdit', 'rector': 'TextEdit', 'titulo': 'TextEdit', 'correo_per': 'TextEdit', 'correo_ins': 'TextEdit', 'celular': 'TextEdit', });
lyr_Divisinparroquial_1.set('fieldLabels', {'DPA_PARROQ': 'inline label - always visible', 'DPA_DESPAR': 'inline label - always visible', 'DPA_CANTON': 'inline label - always visible', 'DPA_DESCAN': 'inline label - always visible', 'DPA_PROVIN': 'inline label - always visible', 'DPA_DESPRO': 'inline label - always visible', });
lyr_InstitucionesEducativasporparroquia_2.set('fieldLabels', {'zona': 'inline label - always visible', 'distrito': 'inline label - always visible', 'circuito': 'inline label - always visible', 'canton': 'inline label - always visible', 'parroquia': 'inline label - always visible', 'denominaci': 'inline label - always visible', 'tipologia': 'inline label - always visible', 'niveles': 'inline label - always visible', 'sostenimie': 'inline label - always visible', 'jornada': 'inline label - always visible', 'jurisdicci': 'inline label - always visible', 'amie': 'inline label - always visible', 'nacionalid': 'inline label - always visible', 'sector': 'inline label - always visible', 'ie': 'inline label - always visible', 'docentes': 'inline label - always visible', 'direccion': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'cedula': 'inline label - always visible', 'rector': 'inline label - always visible', 'titulo': 'inline label - always visible', 'correo_per': 'inline label - always visible', 'correo_ins': 'inline label - always visible', 'celular': 'inline label - always visible', });
lyr_InstitucionesEducativasporparroquia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});