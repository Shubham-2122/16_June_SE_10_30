#include<stdio.h>
#include<conio.h>

int main()
{
	FILE *file;
	char str[100];
	
	file = fopen("test.txt","r");
	
//	null value chcek
	if(file ==NULL){
		printf("error null data..");
		return 1;
	}
	
//	read function
	fgets(str,100,file);
	
	printf("%s",str);
	
	fclose(file);
	
	
	return 0;
}
