"use client";

import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Tarefa } from "@/types/tarefas";
import { useState } from "react";

const TarefasLista = ({ dados }: { dados: Tarefa[] }) => {
	return (
		<div className="space-y-4">
			{dados.map((tarefa) => (
				<TarefasListaCard tarefa={tarefa} key={tarefa.id} />
			))}
		</div>
	);
};

const TarefasListaCard = ({ tarefa }: { tarefa: Tarefa }) => {
  const [feito, setFeito] = useState(tarefa.feito);
	return (
		<Card key={tarefa.id}>
			<CardContent className="pt-6">
				<div className="flex items-center space-x-4">
					<Checkbox
						id={`tarefa-${tarefa.id}`}
						checked={feito}
						onCheckedChange={(checked) => setFeito(Boolean(checked))}
					/>
					<Label
						htmlFor={`tarefa-${tarefa.id}`}
						className={feito ? "line-through" : ""}
					>
						{tarefa.titulo}
					</Label>
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				<Link href={`/tarefas/editar/${tarefa.id}`}>
					<Button variant="outline">Editar</Button>
				</Link>
				<Button
					variant="destructive"
					onClick={() => console.info(tarefa.titulo, "apagar")}
				>
					Apagar
				</Button>
			</CardFooter>
		</Card>
	);
};

const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: 'Learn React', feito: true },
  { id: 2, titulo: 'Learn Next.js', feito: false },
  { id: 3, titulo: 'Build a todo app', feito: false },
];

const PageTarefasListas = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Aplicativo exemplo de hook reducer</h1>
      <h2>Lista de tarefas</h2>
      <TarefasLista dados={tarefasIniciais} />
    </div>
  );
};

export default PageTarefasListas;