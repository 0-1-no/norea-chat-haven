
import React, { useState, useEffect } from 'react';
import { 
  Popover, PopoverContent, PopoverTrigger 
} from "@/components/ui/popover";
import { Zap, Lightbulb, Database, ChevronDown, CreditCard, Check } from 'lucide-react';
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
  const [modeOpen, setModeOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  
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

  const handleModeSelect = (mode: ModelType) => {
    setModelType(mode);
    setModeOpen(false); // Close popover after selection
  };

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    setModelOpen(false); // Close popover after selection
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {/* Mode Selector */}
      <Popover open={modeOpen} onOpenChange={setModeOpen}>
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
                "flex flex-col items-start w-full px-3 py-2 text-left rounded hover:bg-gray-100", 
                modelType === "autopilot" && "bg-gray-100"
              )}
              onClick={() => handleModeSelect("autopilot")}
            >
              <div className="flex items-center w-full">
                <Zap className="w-5 h-5 text-gray-700" />
                <div className="text-sm font-medium ml-3">Auto</div>
                {modelType === "autopilot" && <Check className="ml-auto w-4 h-4 text-primary" />}
              </div>
              <div className="text-xs text-gray-500 mt-1 ml-8">Tilpasser seg hvert spørsmål</div>
            </button>
            
            <button
              className={cn(
                "flex flex-col items-start w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                modelType === "pro" && "bg-gray-100"
              )}
              onClick={() => handleModeSelect("pro")}
            >
              <div className="flex items-center w-full">
                <Database className="w-5 h-5 text-gray-700" />
                <div className="text-sm font-medium ml-3">Pro</div>
                <Badge variant="default" className="bg-primary text-xs py-0 px-1.5 h-4 ml-auto">PRO</Badge>
                {modelType === "pro" && <Check className="ml-2 w-4 h-4 text-primary" />}
              </div>
              <div className="flex items-center w-full">
                <div className="text-xs text-gray-500 mt-1 ml-8">3x flere kilder og detaljerte svar</div>
                <CreditCard className="ml-auto w-4 h-4 text-gray-400" />
              </div>
            </button>
            
            <button
              className={cn(
                "flex flex-col items-start w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                modelType === "resonnering" && "bg-gray-100"
              )}
              onClick={() => handleModeSelect("resonnering")}
            >
              <div className="flex items-center w-full">
                <Lightbulb className="w-5 h-5 text-gray-700" />
                <div className="text-sm font-medium ml-3">Resonnering</div>
                <Badge variant="default" className="bg-primary text-xs py-0 px-1.5 h-4 ml-auto">PRO</Badge>
                {modelType === "resonnering" && <Check className="ml-2 w-4 h-4 text-primary" />}
              </div>
              <div className="flex items-center w-full">
                <div className="text-xs text-gray-500 mt-1 ml-8">Avansert problemløsning</div>
                <CreditCard className="ml-auto w-4 h-4 text-gray-400" />
              </div>
            </button>
          </div>
        </PopoverContent>
      </Popover>
      
      {/* AI Model Selector */}
      {modelType !== "autopilot" && (
        <Popover open={modelOpen} onOpenChange={setModelOpen}>
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
                      "flex flex-col items-start w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                      selectedModel === model.id && "bg-gray-100"
                    )}
                    onClick={() => handleModelSelect(model.id)}
                  >
                    <div className="flex items-center w-full">
                      <div className="text-sm font-medium ml-5">{model.name}</div>
                      {selectedModel === model.id && <Check className="ml-auto w-4 h-4 text-primary" />}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 ml-5">{model.description}</div>
                  </button>
                ))
              ) : (
                resonneringModels.map((model) => (
                  <button
                    key={model.id}
                    className={cn(
                      "flex flex-col items-start w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                      selectedModel === model.id && "bg-gray-100"
                    )}
                    onClick={() => handleModelSelect(model.id)}
                  >
                    <div className="flex items-center w-full">
                      <div className="text-sm font-medium ml-5">{model.name}</div>
                      {selectedModel === model.id && <Check className="ml-auto w-4 h-4 text-primary" />}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 ml-5">{model.description}</div>
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
