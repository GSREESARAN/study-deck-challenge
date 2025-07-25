import { DomainCard } from "@/components/DomainCard";
import { quizDomains } from "@/data/quizData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Study Deck Challenge
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Test your knowledge across multiple domains with our interactive quiz cards. 
          Challenge yourself and track your progress!
        </p>
        <div className="mt-8 text-sm text-muted-foreground">
          Choose a domain below to start your quiz journey
        </div>
      </div>

      {/* Quiz Domains Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizDomains.map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8 text-muted-foreground">
        <p>Ready to challenge yourself? Pick a domain and start learning!</p>
      </div>
    </div>
  );
};

export default Index;
