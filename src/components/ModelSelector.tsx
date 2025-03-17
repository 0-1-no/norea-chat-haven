
import React, { useState, useEffect } from 'react';
import { 
  Popover, PopoverContent, PopoverTrigger 
} from "@/components/ui/popover";
import { Zap, Lightbulb, Database, ChevronDown, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type ModelType = "autopilot" | "pro" | "resonnering";

interface AIModel {
  id: string;
  name: string;
  description: string;
}

interface ModelSelectorProps {
  className?: string;
}

const proModels: AIModel[] = [
  { id: "gpt4", name: "GPT-4", description: "OpenAIs allsidige modell" },
  { id: "gemini", name: "Gemini 2.0 Flash", description: "Googles raske modell" },
  { id: "grok2", name: "Grok 2", description: "xAIs nyeste modell" },
  { id: "sonar", name: "Sonar Pro", description: "Perplexitys raske modell" },
];

const resonneringModels: AIModel[] = [
  { id: "deepseek", name: "DeepSeek R1", description: "Spesialisert for analytisk resonnering" },
  { id: "o1mini", name: "o1 mini", description: "Optimert for logiske problemer" },
];

export const ModelSelector: React.FC<ModelSelectorProps> = ({ className }) => {
  const [modelType, setModelType] = useState<ModelType>("autopilot");
  const [selectedModel, setSelectedModel] = useState<string>("");
  
  // Reset selected model when model type changes to autopilot
  useEffect(() => {
    if (modelType === "autopilot") {
      setSelectedModel("");
    } else if (modelType === "pro" && !proModels.some(m => m.id === selectedModel)) {
      setSelectedModel(proModels[0].id);
    } else if (modelType === "resonnering" && !resonneringModels.some(m => m.id === selectedModel)) {
      setSelectedModel(resonneringModels[0].id);
    }
  }, [modelType]);

  // Get current model details
  const getCurrentModelName = () => {
    if (modelType === "autopilot") return "Auto";
    
    const models = modelType === "pro" ? proModels : resonneringModels;
    const model = models.find(m => m.id === selectedModel);
    return model ? model.name : models[0].name;
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {/* Mode Selector */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            {modelType === "autopilot" && <Zap className="w-3 h-3" />}
            {modelType === "pro" && <Database className="w-3 h-3" />}
            {modelType === "resonnering" && <Lightbulb className="w-3 h-3" />}
            
            <span>
              {modelType === "autopilot" ? "Autopilot" : 
               modelType === "pro" ? "Pro" : "Resonnering"}
            </span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-0" align="start">
          <div className="p-1">
            <button
              className={cn(
                "flex items-start gap-3 w-full px-3 py-2 text-left rounded hover:bg-gray-100", 
                modelType === "autopilot" && "bg-gray-100"
              )}
              onClick={() => setModelType("autopilot")}
            >
              <Zap className="w-5 h-5 mt-0.5 text-gray-700" />
              <div>
                <div className="text-sm font-medium">Auto</div>
                <div className="text-xs text-gray-500">Tilpasser seg hvert spørsmål</div>
              </div>
            </button>
            
            <button
              className={cn(
                "flex items-start gap-3 w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                modelType === "pro" && "bg-gray-100"
              )}
              onClick={() => setModelType("pro")}
            >
              <Database className="w-5 h-5 mt-0.5 text-gray-700" />
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">Pro</div>
                <Badge variant="default" className="bg-primary text-xs py-0 px-1.5 h-4">PRO</Badge>
              </div>
              <div className="text-xs text-gray-500">3x flere kilder og detaljerte svar</div>
              <CreditCard className="absolute right-3 top-2 w-4 h-4 text-gray-400" />
            </button>
            
            <button
              className={cn(
                "flex items-start gap-3 w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                modelType === "resonnering" && "bg-gray-100"
              )}
              onClick={() => setModelType("resonnering")}
            >
              <Lightbulb className="w-5 h-5 mt-0.5 text-gray-700" />
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">Resonnering</div>
                <Badge variant="default" className="bg-primary text-xs py-0 px-1.5 h-4">PRO</Badge>
              </div>
              <div className="text-xs text-gray-500">Avansert problemløsning</div>
              <CreditCard className="absolute right-3 top-2 w-4 h-4 text-gray-400" />
            </button>
          </div>
        </PopoverContent>
      </Popover>
      
      {/* AI Model Selector */}
      {modelType !== "autopilot" && (
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <span>{getCurrentModelName()}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-0 z-50" align="start">
            <div className="p-1">
              {modelType === "pro" ? (
                proModels.map((model) => (
                  <button
                    key={model.id}
                    className={cn(
                      "flex items-start gap-3 w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                      selectedModel === model.id && "bg-gray-100"
                    )}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="w-5"></div>
                    <div>
                      <div className="text-sm font-medium">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.description}</div>
                    </div>
                  </button>
                ))
              ) : (
                resonneringModels.map((model) => (
                  <button
                    key={model.id}
                    className={cn(
                      "flex items-start gap-3 w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                      selectedModel === model.id && "bg-gray-100"
                    )}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="w-5"></div>
                    <div>
                      <div className="text-sm font-medium">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.description}</div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

