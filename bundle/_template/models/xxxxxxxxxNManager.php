<?php
class xxxxxManager extends xxx {
	/**
	 * Returns an editorial from the database by a URL
	 * @param string $url The URL
	 * @return array|false The article or false if not found
	 */
	public function selectAll() {
		$resposta = null;
			try {
				$consulta = (BdD::$connection)->prepare('xxxxxxxxxxx');
				$qFiles = $consulta->execute();
				if ($qFiles > 0) {
					$consulta->setFetchMode(PDO::FETCH_ASSOC); 
					$result = $consulta->fetchAll();
					foreach($result as $fila) {
						$resposta[] = $fila;
					}
				}
			} catch(PDOException $e) {
				echo "***Error***: " . $e->getMessage();
			}
		return $resposta;
	}
	public function selectUn() {
		$resposta = null;
			try {
				$consulta = (BdD::$connection)->prepare('xxxxxxxxxxxx');
				$consulta->bindParam('idEditorialIsbn',$this->idEditorialIsbn);
				$qFiles = $consulta->execute();
				if ($qFiles > 0) {
					$consulta->setFetchMode(PDO::FETCH_ASSOC); 
					$result = $consulta->fetchAll();
					foreach($result as $fila) {
						$resposta = $fila;
					}
					$this->xxxx = $resposta["xxxxx"];
					$this->xxxxx = $resposta["xxxxxx"];
				}
			} catch(PDOException $e) {
				echo "***Error***: " . $e->getMessage();
			}
		return $resposta;
	}
	public function xxxxxxNManagerBD($url=null)
	{
		$resposta = null;
		if ($url != null) {
			try {
				$consulta = (BdD::$connection)->prepare('
					SELECT xxxxx
					FROM xxxx
					WHERE xxxx');
				$consulta->bindParam('xxxx',xxxxxx);
				$qFiles = $consulta->execute();
				if ($qFiles > 0) {
					$consulta->setFetchMode(PDO::FETCH_ASSOC); 
					$result = $consulta->fetchAll();
					foreach($result as $fila) {
						$resposta = $fila;
					}
					$this->xxxx = $resposta["xxxx"];
					$this->xxxx = $resposta["xxxx"];
					
					$resposta = $this;
				}
			} catch(PDOException $e) {
				echo "Error: " . $e->getMessage();
			}
		}
		return $resposta;
	}

	/**
	 * 
	 * @return array All the xxxx in the database
	 */
	public function selectEditorialsBD()
	{
		$resposta = null;
		try {
			$consulta = (BdD::$connection)->prepare('
				SELECT xxxx
				FROM `x`
				ORDER BY xx ASC
			');
			$qFiles = $consulta->execute();
			if ($qFiles > 0) {
				$consulta->setFetchMode(PDO::FETCH_ASSOC); 
				$result = $consulta->fetchAll();
				foreach($result as $fila) {
					$resposta[] = new Editorial($fila);
				}
			}
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $resposta;
	}
	
	public function updateBD()
	{
		$qFiles = 0;
		try {
			$consulta = (BdD::$connection)->prepare("
				UPDATE xxxx 
				SET `xxxx` = :xxx, `xxxx` = :xxxx
				WHERE  `xxxx` = :xxxxx
			");
			$consulta->bindParam('xx',$this->xx);
			$consulta->bindParam('xx',$this->xx);
			$consulta->bindParam('xx',$this->xx);
			$qFiles = $consulta->execute();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $qFiles;
	}
	public function insertBD()
	{
		$qFiles = 0;
		try {
			$consulta = (BdD::$connection)->prepare("
				INSERT INTO xx (`xxx`,`xxxx`)
				VALUES (:xxx,:xxxx)
			");
			$consulta->bindParam('xx',$this->xx);
			$consulta->bindParam('xxx',$this->xxx);

			$qFiles = $consulta->execute();
			$this->idEditorial = (BdD::$connection)->lastInsertId();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $qFiles;
	}
	public function deleteBD()
	{
		$qFiles = 0;
		try {
			$consulta = (BdD::$connection)->prepare("
				DELETE
				FROM xxxx 
				WHERE  `xx` = :xx
			");
			$consulta->bindParam('xx',$this->xx);

			$qFiles = $consulta->execute();
			$this->idEditorialIsbn = null;
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $qFiles;
	}
}
?>