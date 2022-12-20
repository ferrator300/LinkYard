<?php
	//
	// fitxer de dades
	//
	
	//creem una classe on hi guardem les dades de l'editorial
	class xxxx
	{
		//camps de dades
		var $xxxx1;
		var $xxxx2;
		...
		
		//constructor de si pasem valors al crear objecte
		function __construct($valors=null)
		{
			if ($valors == null) {
				$this->xxxxxn = null;

			}
			else {
				if (is_array($valors)) {
					if (isset($valors["xxxxx"])) $this->xxxxx = $valors["xxxxx"];					
				}
			}
		}

		// funció d'assignar valors d'un array a les propietats
		public function Assignar($valors=null)
		{
			if ($valors == null) {
				$this->xxxxx1 = null;
				$this->xxxxx2 = null;
				...
			}
			else {
				if (is_array($valors)) {
					if (isset($valors["xxxx1"])) $this->xxxx1 = $valors["xxxx1"];
					if (isset($valors["xxxx2"])) $this->xxxx2 = $valors["xxxx2"];					
				}
			}
		}

		//funció d'assignar un valor a una propietat
		public function set_xxx($val=null) {
			if ($val)
			$this->xxx = $val;
		}

		//funció d'obtenir un valor. Retorna un array
		public function get_xxxxx() {
			return array(
				"xxxx" =>$this->xxxxx,				
			);
		}

		//funció d'obtenir un valor. Retorna un valor
		public function get_xxx() {
			return ($this->xxx);
		}

	}
?>