interface IUpdateCaracteristicasPacienteDTO {
  id: string;
  raca_etnia?: string;
  cor_olhos?: string;
  biotipo?: string;
  cor_cabelos?: string;
  tipo_cabelo?: string;
  corte_cabelo?: string;
  estatura_aproximada?: number;
  peso_aproximado?: number;
  idade_aproximada?: number;
  tem_barba?: number;
  tem_bigode?: number;
  sinais_particulares?: string;
  acessorios_utilizados?: string;
  deficiencias?: string;
  vestimentas?: string;
  local_encontrado?: string;
  bairro?: string;
  condicoes_encontrado?: string;
}

export { IUpdateCaracteristicasPacienteDTO };
