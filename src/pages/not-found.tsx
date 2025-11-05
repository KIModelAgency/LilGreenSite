import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-serif text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-4">Seite nicht gefunden</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Die Seite, die du suchst, existiert leider nicht.
        </p>
        <Link href="/">
          <Button size="lg" data-testid="button-home">
            <Home className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
}
