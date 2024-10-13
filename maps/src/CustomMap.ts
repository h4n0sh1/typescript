interface Mappable{
    location: {
        lat: number;
        lng: number;
    };
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        //this.initMap(id);
        this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            },
            mapId: 'CustomMap'
        });
    }

    // Other way to initialize map 
    // https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=fr#maps_add_map-javascript
    async initMap(id: string){
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        this.googleMap = new Map(document.getElementById(id) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            },
            mapId: 'CustomMap'
        });
    }

    async addMarker(mappable: Mappable): Promise<void>{
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

        const marker = new AdvancedMarkerElement({
            map:this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'Hi there !'
            });
            
            infoWindow.open(this.googleMap, marker)
        })
    }

}

