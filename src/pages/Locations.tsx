{/* Action Buttons */}
<div className="flex flex-wrap gap-3 pt-4">
  <a
    href={location.gmapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 min-w-[200px]"
  >
    <Button
      className="w-full"
      data-testid={`button-navigate-${location.id}`}
    >
      <Navigation className="w-4 h-4 mr-2" />
      {t.locations.navigate}
    </Button>
  </a>

  {/* Einheitlicher WhatsApp-Button für alle Standorte */}
  <a
    href="https://wa.me/4917650608974?text=Hallo%20Lil%20Green%20Kitchen%2C%20ich%20möchte%20gerne%20eine%20Vorbestellung%20aufgeben."
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 min-w-[200px]"
  >
    <Button
      variant="outline"
      className="w-full bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
      data-testid={`button-whatsapp-${location.id}`}
    >
      <Phone className="w-4 h-4 mr-2" />
      {t.locations.whatsapp}
    </Button>
  </a>
</div>
