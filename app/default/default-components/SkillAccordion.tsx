import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/root-components/shadcn/ui/accordion";
import { Badge } from "./Badge";

interface Skill {
  name: string;
  items: string[];
}

interface SkillAccordionProps {
  skills: Skill[];
}

export function SkillAccordion({ skills }: SkillAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {skills.map((skill, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <p className="font-light">{skill.name}</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, itemIndex) => (
                <Badge key={itemIndex} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
