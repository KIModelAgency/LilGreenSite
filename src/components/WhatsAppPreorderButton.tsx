import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PREORDER_URL =
  "https://wa.me/4917650608974?text=Hallo%20Lil%20Green%20Kitchen%2C%20ich%20möchte%20gerne%20eine%20Vorbestellung%20aufgeben.";

export function WhatsAppPreorderButton({
  className = "",
  fullWidth = true,
  variant = "outline",
  label = "Vorbestellen",
  testId = "button-whatsapp-preorder",
}: {
  className?: string;
  fullWidth?: boolean;
  variant?: "default" | "outline";
  label?: string;
  testId?: string;
}) {
  return (
    <a
      href={WHATSAPP_PREORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={fullWidth ? `flex-1 min-w-[200px] ${className}` : className}
    >
      <Button
        variant={variant}
        className={`${
          fullWidth ? "w-full" : ""
        } bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600`}
        data-testid={testId}
      >
        <FaWhatsapp className="w-4 h-4 mr-2" />
        {label}
      </Button>
    </a>
  );
}
