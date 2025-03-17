
import React, { useState, useEffect } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  SelectGroup, 
  SelectLabel 
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Zap, Lightbulb, Database, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            {modelType === "autopilot" && <Zap className="w-4 h-4" />}
            {modelType === "pro" && <Database className="w-4 h-4" />}
            {modelType === "resonnering" && <Lightbulb className="w-4 h-4" />}
            
            <span>
              {modelType === "autopilot" ? "Autopilot" : 
               modelType === "pro" ? "Pro" : "Resonnering"}
            </span>
            <ChevronDown className="w-4 h-4 ml-1" />
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
                <div className="font-medium">Auto</div>
                <div className="text-sm text-gray-500">Tilpasser seg hvert spørsmål</div>
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
              <div>
                <div className="font-medium">Pro</div>
                <div className="text-sm text-gray-500">3x flere kilder og detaljerte svar</div>
              </div>
            </button>
            
            <button
              className={cn(
                "flex items-start gap-3 w-full px-3 py-2 text-left rounded hover:bg-gray-100",
                modelType === "resonnering" && "bg-gray-100"
              )}
              onClick={() => setModelType("resonnering")}
            >
              <Lightbulb className="w-5 h-5 mt-0.5 text-gray-700" />
              <div>
                <div className="font-medium">Resonnering</div>
                <div className="text-sm text-gray-500">Avansert problemløsning</div>
              </div>
            </button>
          </div>
        </PopoverContent>
      </Popover>
      
      {modelType !== "autopilot" && (
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <span>{getCurrentModelName()}</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-0" align="start">
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
                      <div className="font-medium">{model.name}</div>
                      <div className="text-sm text-gray-500">{model.description}</div>
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
                      <div className="font-medium">{model.name}</div>
                      <div className="text-sm text-gray-500">{model.description}</div>
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
