import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PREORDER_URL =
  "https://wa.me/4917650608974?text=Hallo%20Lil%20Green%20Kitchen%2C%20ich%20möchte%20gerne%20eine%20Vorbestellung%20aufgeben.";

export function WhatsAppPreorderButton({
  label = "Vorbestellen",
  testId = "button-whatsapp-preorder",
  linkClassName = "",
  buttonClassName = "",
  variant = "outline",
  size = "lg",
}: {
  label?: string;
  testId?: string;
  linkClassName?: string;
  buttonClassName?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}) {
  // Default-Styles: gleiche Optik/Größe wie Hero-Buttons
  const baseButtonClasses =
    "w-full h-12 text-base justify-center bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600";

  return (
    <a
      href={WHATSAPP_PREORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full ${linkClassName}`}
    >
      <Button
        size={size}
        variant={variant}
        className={`${baseButtonClasses} ${buttonClassName}`.trim()}
        data-testid={testId}
      >
        <FaWhatsapp className="w-4 h-4 mr-2" />
        {label}
      </Button>
    </a>
  );
}
