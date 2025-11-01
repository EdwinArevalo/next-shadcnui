// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Cómo creo un nuevo proyecto?</AccordionTrigger>
        <AccordionContent>
          Haz clic en el botón "Nuevo Proyecto" en la esquina superior derecha
          del dashboard. Completa el formulario con la información requerida.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Puedo invitar a miembros del equipo?</AccordionTrigger>
        <AccordionContent>
          Sí, ve a la pestaña "Equipo" y haz clic en "Invitar miembro". 
          Ingresa su email y asigna un rol.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Cómo cambio la prioridad de una tarea?</AccordionTrigger>
        <AccordionContent>
          En la tabla de tareas, haz clic en "Editar" junto a la tarea que
          deseas modificar. Podrás cambiar la prioridad y otros detalles.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}